import styled from 'styled-components';

const Btns = ({ categories, filterProjects, value }) => {
  return (
    <Wrapper>
      {categories.map((category, index) => {
        console.log(value);
        return (
          <button
            type="button"
            // className="filter-btn active"
            className={`filter-btn ${index === value && 'active'}`}
            key={index}
            onClick={() => filterProjects(category, index)}
          >
            {category}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  .filter-btn {
    display: inline-block;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 8px 15px;
    margin: 10px;
    border: none;
    background: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: 0.3s ease-out;
  }
  .filter-btn.active {
    color: rgba(0, 0, 0, 1);
    border-bottom: 2px solid var(--title-bg);
  }
  @media (max-width: 414px) {
    .filter-btn {
      font-size: 16px;
      letter-spacing: 0px;
      margin: 0px;
    }
  }
`;

export default Btns;
