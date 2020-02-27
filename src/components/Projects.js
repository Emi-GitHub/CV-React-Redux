import React, { Component } from 'react'
import { connect } from 'react-redux';
import Music from './Projects/Music/Music';
import Todo from './Projects/Todo/Todo';
import Youtube from './Projects/Youtube/Youtube';
import Pictures from './Projects/Pictures/Pictures';
import News from './Projects/News/News'
import Menu from './Menu';
import { showMusic } from '../actions';
import { showNews } from '../actions';
import { showYoutube } from '../actions';
import { showPicture } from '../actions';
import { showNotes } from '../actions';

export class Projects extends Component {
    componentDidMount(){
        this.props.showMusic(false);
    }
    render() {
        return (
            <div className={this.props.theme}>
                <Menu theme={this.props.theme}/>
                <div className="my-header" style={{color:this.props.name}}>
                    Please,<br/> <br/>
                    select a field! <br/> <br/>
                </div>
                
                    <div className="about-me" style={{marginLeft:"100px", marginBottom:"30px", color:this.props.name}}>
                         There is only React and Redux application, 
                        if you are interested in other application you can click on "Contact" and check my github. Enjoy! 
                    </div>
                <div style={{margin:"auto", width:"60%"}}>
                    <span className="dot" style={{fontSize:"40px", width:"180px", backgroundColor:this.props.dot}} onClick={()=>this.props.showMusic(this.props.music)}>Play music</span>
                    <span className="dot" style={{fontSize:"40px", width:"180px", backgroundColor:this.props.dot}} onClick={()=>this.props.showYoutube(this.props.youtube)}>Youtube</span>
                    <span className="dot" style={{fontSize:"40px", width:"180px", backgroundColor:this.props.dot}} onClick={()=>this.props.showNotes(this.props.notes)}>Notes</span>
                    <span className="dot" style={{fontSize:"40px", width:"180px", backgroundColor:this.props.dot}} onClick={()=>this.props.showPicture(this.props.picture)}>Pictures</span>
                    <span className="dot" style={{fontSize:"40px", width:"180px", backgroundColor:this.props.dot}} onClick={()=>this.props.showNews(this.props.news)}>News</span>
                </div> 
                {this.props.music ? <Music/> : null}
                {this.props.notes ? <Todo /> : null}
                {this.props.youtube ? <Youtube /> : null}
                {this.props.picture ? <Pictures /> : null}
                {this.props.news ? <News /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        dot: state.dot,
        music: state.music,
        youtube: state.youtube,
        news: state.news,
        picture: state.picture,
        notes: state.notes,
        hooks: state.hooks 
    }
}

export default connect(mapStateToProps, {showMusic, showYoutube, showNews, showPicture, showNotes})(Projects)