import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contact = () => {
  const [mainData, setMainData] = useState([]);
  const [themeChange, setThemeChange] = useState(false);

  useEffect(() => {
    console.log('Use effect running');
    const dataFetching = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await res.json();
      if (data) {
        console.log(data);
      }
      setMainData(data);
    };
    dataFetching();
    return () => {
      console.log('clean up');
      dataFetching();
    };
  }, []);

  return (
    <ContactContainer>
      This is Contact
      <button onClick={() => setThemeChange(prev => !prev)}>Change Theme</button>
      <ContactBlock>
        {mainData?.map(({ id, title }) => (
          <Link to={`/Contact/${id}`} key={id}>
            <ContactBlockUnit $themeChange={themeChange}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYDoMzzfzE_xTrjVhqZ_xar7DbNnIjInXTA&s" alt="Contact Block Unit" />
              <h3>{title}</h3>
            </ContactBlockUnit>
          </Link>
        ))}
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBlock = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnit = styled.div`
  background-color:  ${props => props.$themeChange ? `black` : `#cf6e67`}; 
  padding: 20px;
  border-radius: 7px;
  border: 2px solid ${({ $themeChange }) => $themeChange ? `black` : `#cf6e67`}; 
  transition: all 400ms ease-in;
  
  &:hover {
    background-color: inherit;
  }
  h3 {
    font-size: 14px;
    color: ${props => props.$themeChange ? `#cc6293` : props.pre};
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;
