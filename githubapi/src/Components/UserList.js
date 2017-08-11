import React from 'react';

const UserList = () => {
	return (
		<div style={{display:"flex", justifyContent:"center"}}>

			<div className="card" style={{display:'flex', flexDirection:"column", alignItems:"center", width:"35%"}}>

				<div>
					<h3 className="center">Name</h3>
					<img src="https://placehold.it/200"/>
				</div>


				<div>
					<h4>Company</h4>
					<h4>url</h4>
					<h4>Blog</h4>
				</div>

			</div>
		</div>
	);
}

export default UserList;
