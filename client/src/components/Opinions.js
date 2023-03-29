import "./Opinions.css";
import { useState, useEffect } from "react";

function Opinions({ isUserLogged, userData }) {
    const [opinion, setOpinion] = useState({
        title: "",
        comment: "",
    });
    const [opinions, setOpinions] = useState([]);

    useEffect(() => {
        async function getOpinions() {
            const response = await fetch("http://localhost:3001/opinions");
            const data = await response.json();
            setOpinions(data);
        }
        getOpinions().catch((error) => console.error(error));
    }, []);

    function updateData(event) {
        setOpinion({
            ...opinion,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/opinions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...opinion, user: userData.firstName}),
        })
            .then((response) => response.json())
            .then((data) => {
                setOpinions([...opinions, data]);
            })
            .catch((error) => {
                console.log(error);
            });
        setOpinion({
            title: "",
            comment: "",
        });
    }

    return (
        <div className="opinions">
            {isUserLogged && (
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={opinion.title}
                            onChange={updateData}
                        />
                    </label>
                    <label>
                        <textarea
                            type="text"
                            placeholder="Comment"
                            name="comment"
                            value={opinion.comment}
                            onChange={updateData}
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={!(opinion.title.length > 0 && opinion.comment.length > 0)}
                    >
                        Submit
                    </button>
                </form>
            )}
            {opinions.map((opinion) => (
                <div className="opinion" key={opinion._id}>
                    <h3>{opinion.title}</h3>
                    <p>{opinion.comment}</p>
                    <p className="createdBy">This opinion was written by {opinion.user}</p>
                </div>
            ))}
        </div>
    );
}

export default Opinions;
