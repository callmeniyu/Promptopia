import PromptCard from "./PromptCard"
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{name} Profile</span>
            </h1>
            <p className="desc text-left">{desc}</p>
            <div className="mt-10 prompt_layout">
                {data.map((post, i) => (
                    <PromptCard
                        key={i}
                        post={post}
                        handleDelete={() => handleDelete && handleDelete(post)}
                        handleEdit={() => handleEdit && handleEdit(post)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Profile
