import React, { Component } from 'react'
import Fortnite from '../img/Fortnite.jpg'
import speedtyping from '../img/speedtyping.png'
import todolist from '../img/todolist.png'
import Card from './Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            items: [
                {
                    id: 0,
                    title: 'Speed Typing Game',
                    subTitle: 'Playing on html file',
                    imgSrc: speedtyping,
                    link: 'https://github.com/dungvo0111/Game',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Todo List',
                    subTitle: 'Using React & Hooks API',
                    imgSrc: todolist,
                    link: 'https://github.com/dungvo0111/todolist',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Online Shopping Site',
                    subTitle: 'Using React, Express',
                    imgSrc: Fortnite,
                    link: 'https://shopwebtest.herokuapp.com/',
                    selected: false
                }

            ]                
        }
    }

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}