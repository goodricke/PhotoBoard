export const Person = ({ data }) => {

    let yearOrdinal;
    switch (data.year) {
        case undefined:
            yearOrdinal = "";
            break;
        case 1:
            yearOrdinal = "1st year";
            break;
        case 2:
            yearOrdinal = "2nd year";
            break;
        case 3:
            yearOrdinal = "3rd year";
            break;
        default:
            yearOrdinal = data.year + "th year";
            break;
    }

    console.log(data);
    return (
        <div className="person">
            <h1>{data.name}</h1>
            <img src={"/photos/" + (data.filename || "unknown.png")} />
            <h2 style={data.position.startsWith("RAG") ? {fontSize: "18mm"} : {}}>{data.position}</h2>
            {data.email && <p className="email">{data.email}</p>}
            {data.subject && <p>{yearOrdinal} {data.subject} {!data.subject.startsWith("PhD") && "student"}</p>}
            {data.place && <p>Favourite place in York: {data.place}</p>}
            {data.group && <div className={"group-tag group-tag-" + data.group}>{data.group}</div>}
        </div >
    );
};