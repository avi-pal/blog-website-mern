import React from "react";
import { format } from "date-fns";
import { formatISO9075 } from "date-fns/esm";
import { Link } from "react-router-dom";

export default function Post({
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
  _id,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/` + _id}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>

      <div className="texts">
        <Link to={`/post/` + _id}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          {/* <time>{format(new Date(createdAt), "MMM d ,yyyy HH:mm")}</time> */}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
