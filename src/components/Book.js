function Book(prop) {
    return <li>
        <article> <p>Title: {prop.title} </p>
            <p>Description: {prop.description}</p>
        </article>

    </li>
}

export default Book;