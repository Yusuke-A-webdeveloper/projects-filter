import styled from 'styled-components';

const Projects = ({ projects }) => {
  return (
    <Wrapper>
      {projects.map((project) => {
        const { id, title, category, img, desc, href } = project;
        return (
          <div className="single-project-container" key={id}>
            <div className="img-con">
              <img src={img} alt={title} />
            </div>
            <main>
              <h2>{title}</h2>
              <h4>{category}</h4>
              <p>{desc}</p>
              <a href={href}>see detail</a>
            </main>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 190px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;
  .single-project-container {
    position: relative;
    width: 450px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    .img-con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    :hover .img-con {
      z-index: -1;
    }
    main {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8);
      h2 {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--title-bg);
        font-size: 35px;
      }
      h4 {
        color: var(--header4);
        font-size: 20px;
      }
      p {
        color: #fff;
        padding: 0 15px;
      }
      a {
        display: inline-block;
        font-size: 18px;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-transform: capitalize;
        -webkit-letter-spacing: 1px;
        -moz-letter-spacing: 1px;
        -ms-letter-spacing: 1px;
        letter-spacing: 1px;
        margin-top: 10px;
        padding: 4px 10px;
        color: var(--title-bg);
        border: 1px solid;
        -webkit-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        :hover {
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 414px) {
    .single-project-container {
      width: 100%;
    }
    .single-project-container main h2 {
      font-size: 30px;
    }
  }
`;

export default Projects;
