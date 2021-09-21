import React from 'react';
import Container from '../components/Container';

export interface AboutProps {}

const About: React.FC = () => {
  return (
    <Container  maxWidth="1200px" width={80}>
      <h1>About Royal Rangers</h1>
      <p>
        The Royal Rangers program is an activity-based, small group church
        ministry for boys and young men in grades K-12. Our mission is to
        evangelize, equip and empower the next generation of Christlike men and
        lifelong servant leaders. We provide Christlike character formation and
        servant leadership development for boys and young men in a highly
        relational and fun environment. The Royal Rangers program is a
        cross-generational ministry that interconnects well with children, youth
        and adult ministries and fits easily into the fabric of pastoral vision
        and into the flow of church ministries. We affirm the male hands-on,
        interactive learning style by featuring an intentional discipleship
        journey for boys and young men based on their unique design, needs and
        interests. Every meeting, outing or service activity is designed to
        encourage boys and young men in their walk with God. We provide men with
        the tools to model Christlike manhood as they mentor boys on a
        Bible-based, Christ-centered, Spirit-empowered journey to maturity in
        the faith. Boys learn to study and apply what the Bible says about
        integrity, doctrine, biblical worldview, cultural issues and manhood. In
        addition, the Royal Rangers ministry molds boys into servant leaders,
        teaching them vital social, equipping, attitude, leadership and service
        skills. The Royal Rangers program at a local church is referred to as an
        "outpost" and may consist of one or more groups. Each group follows a
        program of activities based on the interests and abilities of boys in
        that group. The links below provide details on the advancement system
        used in each group:
      </p>
    </Container>
  );
};

export default About;
