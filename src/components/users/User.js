import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
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
      <Link to='/' className='btn btn-dark my-1 mr-1'>
        Back To Search
      </Link>
      <div>
        Hireable:
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
      </div>
      <div className='card' style={userStyle}>
        <div className='text-center'>
          <img
            src={avatar_url}
            className='rounded-circle my-3'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div className='text-center'>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Profile
          </a>
          <ul className='list-unstyled'>
            {login && (
              <li>
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              </li>
            )}

            {company && (
              <li>
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              </li>
            )}

            {blog && (
              <li>
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='card text-center mt-3' style={metricsGrid}>
        <div className='badge badge-pill badge-primary my-3 ml-3'>
          Followers: {followers}
        </div>
        <div className='badge badge-pill badge-success my-3'>
          Following: {following}
        </div>
        <div className='badge badge-pill badge-warning my-3'>
          Public Repos: {public_repos}
        </div>
        <div className='badge badge-pill badge-info my-3 mr-3'>
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
};
const metricsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '4rem',
};

export default User;
