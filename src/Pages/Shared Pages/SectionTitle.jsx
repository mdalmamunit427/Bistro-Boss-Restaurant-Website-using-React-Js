
const SectionTitle = ({subheading, heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-8">
            <p className="mb-2 text-yellow-500">---{subheading}---</p>
            <h4 className="uppercase border-y-2 text-3xl py-4">{heading}</h4>
        </div>
    );
};

export default SectionTitle;