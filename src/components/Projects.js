import React, { Component } from 'react';
import { connect } from 'react-redux';
import Music from './Projects/Music/Music';
import Todo from './Projects/Todo/Todo';
import Youtube from './Projects/Youtube/Youtube';
import Pictures from './Projects/Pictures/Pictures';
import News from './Projects/News/News';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import MenuMobileButton from './MenuMobileButton';
import BackDrop from './BackDrop';
import { showMusic } from '../actions';
import { showNews } from '../actions';
import { showYoutube } from '../actions';
import { showPicture } from '../actions';
import { showNotes } from '../actions';
import '../Style/Projects.css';

class Projects extends Component {
    componentDidMount(){
        this.props.showMusic(false);
    }
    headerLanguage = (language) => {
        if(language === 'english'){
            return(
                <div className="project-header" style={{color:this.props.name}}>
                    Please,<br/> <br/>
                    select a field! <br/> <br/>
                </div>
            )
        }
        else if(language === 'bosnian'){
            return(
                <div className="project-header" style={{color:this.props.name}}>
                    Odaberi polje! <br/> <br/>
                </div>
            )
        }
    }
    render() {
        let sideDrawer;
        let backdrop;
        if(this.props.sideDrawerOpen) {
            sideDrawer =  <MenuMobile />
            backdrop = <BackDrop />
        }
        return (
            <div className={this.props.theme}>
                <div className="menu-visible">
                    <Menu theme={this.props.theme}/>
                </div>
                <div className="button-visible">
                    <MenuMobileButton theme={this.props.theme}/>
                </div>
                {sideDrawer}
                {backdrop}
                {this.props.language==='english' ? this.headerLanguage('english') : this.headerLanguage('bosnian')}
                <div className="about-projects" style={{color:this.props.name}}>
                    {this.props.language==='english' ? "There is only React and Redux application, if you are interested in other application you can click on 'Contact' and check my github. Enjoy!"  : "Ovdje se nalaze samo React i Redux aplikacije, ako ste zainteresovani za ostale možete provjeriti moj GitHub profil koji se nalazi u polju 'Contact'. Uživaj!"}
                </div>
                <div className="project-dot parent">
                    <div className="child">
                        <span 
                            className="dot aid-projects" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={()=>this.props.showMusic(this.props.music)}
                        >
                            Play music
                        </span>
                        <span 
                            className="dot aid-projects" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={()=>this.props.showYoutube(this.props.youtube)}
                        >
                            Youtube
                        </span>
                        <span 
                            className="dot aid-projects" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={()=>this.props.showNotes(this.props.notes)}
                        >
                            Notes
                        </span>
                        <span 
                            className="dot aid-projects" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={()=>this.props.showPicture(this.props.picture)}
                        >
                            Pictures
                        </span>
                        <span 
                            className="dot aid-projects"
                            style={{backgroundColor:this.props.dot}} 
                            onClick={()=>this.props.showNews(this.props.news)}
                        >
                            News
                        </span>
                    </div>
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
        hooks: state.hooks,
        language: state.language,
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps, {showMusic, showYoutube, showNews, showPicture, showNotes})(Projects);