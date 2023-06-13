import Link from "next/link";

const navigations = [
    {
        id: "about",
        label: "About",
    },
    {
        id: "skills",
        label: "Skills",
    },
    {
        id: "projects",
        label: "Projects",
    },
    {
        id: "contact",
        label: "Contact",
    },
];

const Navigation = () => {
    return (
        <div className="flex items-center">
            {navigations?.map((navigation) => (
                <Link
                    key={navigation.id}
                    href={"#" + navigation.id}
                    className="group px-2 py-1 text-sm font-semibold text-slate-200 hover:text-slate-300/50 sm:text-base lg:text-xl"
                >
                    {"#"}
                    <span className="group-hover:custom-underline">
                        {navigation.label}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
