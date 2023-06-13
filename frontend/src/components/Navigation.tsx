import Link from "next/link";

const navigations = [
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
                    className="px-2 py-1 text-sm font-semibold text-slate-200 hover:text-slate-300/50"
                >
                    #{navigation.label}
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
