import "./NewItem.css";

function NewItem({ id, name, image, time }) {
    return (
        <div className="item-card">
            <img className="item-img" src={image} alt={name} />
            <div className="item-info">
                <h2 className="item-id">#{id}</h2>
                <h3 className="item-name">{name}</h3>
                <p className="item-time">{time}</p>
            </div>
        </div>
    );
}

export default NewItem;
