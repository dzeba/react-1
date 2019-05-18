import React from "react";
import PropTypes from "prop-types";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide, {
    Controls,
    Breakpoints
} from "@glidejs/glide/dist/glide.modular.esm";

export default class Gallery extends React.Component {
    componentDidMount() {
        this.glide = new Glide(this.el).mount({Controls, Breakpoints});


    }


    componentWillUnmount() {
        this.glide.destroy();
    }

    render() {
        return (
            <div
                className="glide"
                style={{
                    background: "gray"
                }}
                ref={el => (this.el = el)}
            >

                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {this.props.videos.map(video => (
                            <li className="glide__slide" key={video}>
                                <video
                                    controls
                                    loop
                                    style={{
                                        maxHeight: 300,
                                        margin: "auto",
                                        display: "block"
                                    }}
                                >
                                    <source type="video/mp4" src={video}/>
                                </video>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                    <button
                        className="glide__arrow glide__arrow--left"
                        data-glide-dir="<"
                    >
                        prev
                    </button>
                    <button
                        className="glide__arrow glide__arrow--right"
                        data-glide-dir=">"
                    >
                        next
                    </button>
                </div>

                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {this.props.videos.map((video, index) => (
                        <button
                            className="glide__bullet"
                            data-glide-dir={`=${index}`}
                            key={video}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
Gallery.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.string).isRequired
};