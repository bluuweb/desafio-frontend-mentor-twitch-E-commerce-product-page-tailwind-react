export default ({ text }) => {
    return (
        <a href="#" className="group relative py-8">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className="absolute bottom-0 left-0 block h-2 w-full scale-x-0 transition-all duration-700 group-hover:scale-x-100 group-hover:bg-orange-primary"></span>
        </a>
    );
};
