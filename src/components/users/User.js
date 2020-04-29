import React, { useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ loading, repos, getUser, getUserRepos, match, user }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fa fa-unlock" style={{ color: "green" }} />
      ) : (
        <i className="fa fa-times-circle " style={{ color: "red" }} />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="Avatar"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location:{location} </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github profile
          </a>
          <ul>
            <li>{login && <Fragment>username: {login}</Fragment>}</li>
            <li>{company && <Fragment>Company: {company}</Fragment>}</li>
            <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers} </div>
        <div className="badge badge-success">Following:{following} </div>
        <div className="badge badge-light">Public Repos:{public_repos} </div>
        <div className="badge badge-dark">Public Gists:{public_gists} </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
