import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
export default function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Dung. I'm a self-study front-end developer. I mainly use React for my projects.</p>
                <p>I also have basic knowledge of SQL, Java and Python. I'm eager to gain more experience with React and learn new things such as Node JS, Express JS.</p>
                <p>I have several complete projects. You can check them out <a href='https://github.com/dungvo0111' rel='noopener noreferrer' target='_blank'>here</a>, or on the homepage. They were mostly built with React.</p>
                <p>I'm looking forward to do more complex projects.</p>
            </Content>
        </div>
    )
}
