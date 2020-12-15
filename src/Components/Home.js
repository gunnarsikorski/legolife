import React, { useEffect, useState } from 'react';

const Home = () => {
    	const [legos, setLegos] = useState('');

			useEffect(() => {
				const url = 'https://pure-sierra-61007.herokuapp.com/legos';
				fetch(url)
					.then((res) => res.json())
					.then((res) => {
						let legos = res;
						setLegos(legos);
					})
					.catch((error) => console.log(error));
			}, []);

			if (!legos) {
				return <p>Loading...</p>;
            }
            
    return (
        <div>
          {legos.map((lego) => (
              <img src={lego.image_url} alt='lego'/>
          ))}
        </div>
    );
};

export default Home;