import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './sytle.scss'

export default class RatingStar extends Component{
    static propTypes = {
        rate: PropTypes.number,
        scale: PropTypes.number,
    }

    static defaultProps = {
        rate:5,
        scale:1,
    }
    
    render(){
        const {rate,scale} = this.props;
        return(
            <div className="rating-star" style={{transform: `scale(${scale})`,width:80}}>
                <ul className="favor" style={{width:80}}>
                    <li><i className="iconfont icon-favor"></i></li>
                    <li><i className="iconfont icon-favor"></i></li>
                    <li><i className="iconfont icon-favor"></i></li>
                    <li><i className="iconfont icon-favor"></i></li>
                    <li><i className="iconfont icon-favor"></i></li>
                </ul>
                <ul className="favor-fill" style={{width:80*rate/5}}>
                    <li><i className="iconfont icon-favorfill"></i></li>
                    <li><i className="iconfont icon-favorfill"></i></li>
                    <li><i className="iconfont icon-favorfill"></i></li>
                    <li><i className="iconfont icon-favorfill"></i></li>
                    <li><i className="iconfont icon-favorfill"></i></li>
                </ul>
            </div>
            
        )
    }
}