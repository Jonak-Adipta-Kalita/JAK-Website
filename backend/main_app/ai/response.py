import random, json, pickle, nltk, re
import numpy as np

from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model

lemmatizer = WordNetLemmatizer()
intents = json.loads(open("main_app/ai/intents.json").read())

words = pickle.load(open("main_app/ai/model/words.pkl", "rb"))
classes = pickle.load(open("main_app/ai/model/classes.pkl", "rb"))

model = load_model("main_app/ai/model/alexis.h5")


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]

    return sentence_words


def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)

    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1

    return np.array(bag)


def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]

    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []

    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})

    return return_list


def get_response(intents_list, intents_json):
    tag = intents_list[0]["intent"]
    list_of_intents = intents_json["intents"]

    for i in list_of_intents:
        if i["tag"] == tag:
            result = random.choice(i["responses"])
            break

    return result


def talk(message):
    message = message.replace("÷", r"/")
    math_expressions = re.findall(r"((\d+)\s*(\+|\-|\*|\/)\s*(\d+))", message)

    if math_expressions:
        operator = math_expressions[0][2]
        nums = [math_expressions[0][1], math_expressions[0][3]]
        if operator == "/" and nums[1] == 0:
            return "Cannot divide by Zero"
        result = eval(str(math_expressions[0][0]))
        return f"{nums[0]} {operator} {nums[1]} = {result}"

    ints = predict_class(message)
    res = get_response(ints, intents)

    return res


if __name__ == "__main__":
    while True:
        print(talk(str(input(">> "))))
