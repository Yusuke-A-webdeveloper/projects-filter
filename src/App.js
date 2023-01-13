import { useState } from 'react';
import styled from 'styled-components';
import Btns from './components/Btns';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { projectList } from './data';

const allCategories = [
  'all',
  ...new Set(projectList.map((list) => list.category)),
];

function App() {
  const [projects, setProjects] = useState(projectList);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);
  // default value is 0 - category 'all' is default
  const [value, setValue] = useState(0);

  const filterProjects = (category, categoryIndex) => {
    if (category === 'all') {
      setProjects(projectList);
      setValue(categoryIndex);
      return;
    }
    const newProjects = projectList.filter(
      (list) => list.category === category
    );
    setProjects(newProjects);
    setValue(categoryIndex);
  };

  return (
    <Wrapper>
      <div className="title">
        <h1>my project</h1>
      </div>
      <Btns
        categories={categories}
        filterProjects={filterProjects}
        value={value}
      />
      <Projects projects={projects} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  .title {
    background: var(--title-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 45px;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

export default App;
