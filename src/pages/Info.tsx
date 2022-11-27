import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export interface InfoProps {}

const Info = () => {
	return (
		<Container maxWidth="1200px" widthInPercent={85}>
			<h1>Info Page</h1>
			<p>
				The major goal of this project is to create a common source of
				information for the Royal Rangers of Nigeria.
			</p>
			<h2>Add a location</h2>
			<p>
				To <Link to="/add-location">add a location</Link> so that it can be
				visible on the <Link to="find-outpost"> find an outpost</Link> page,
				you´d need to <Link to="/account/request">request an account.</Link>{' '}
				This is the measure to attain accountability and avoid just anybody from
				adding incorrect information to our database.
			</p>
			<h2>Contribute in any capacity too!</h2>
			<p>
				To contribute you can find the{' '}
				<a href="https://github.com/Ozoemenamsolomon/royal-rangers-on-the-map/blob/main/README.md">
					Readme file
				</a>{' '}
				in the github project on how to get started with contributing. You can
				also contribute in any other capacity, just reach out using this mail:{' '}
				<a href="mailto:contribute@royal-rangers.ng">
					contribute@royal-rangers.ng
				</a>{' '}
				, telling how you can contribute to the project.
			</p>
			<h2>Support</h2>
			<p>
				We are very much open to support from the command at any level, to make
				sure the moral of the the contributors remain unfailing. Since the begin
				of the project cost have been incurred such as hosting the site server
				and mail server, aqcuiring the domain name.
			</p>
			<h2>Contributors</h2>
		</Container>
	);
};

export default Info;
