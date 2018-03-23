import React, { Component } from 'react';
// import '../styles.css'


export default class UpperLimbsbtn extends Component {
state = {
    upper: "human_05_male_muscular_system-muscles_of_left_upper_limb_ID",
    arms: "human_05_male_muscular_system-muscles_of_left_upper_arm_ID",
    shoulders: "human_05_male_muscular_system-left_deltoid_ID",
    forearms: "human_05_male_muscular_system-muscles_of_left_forearm_ID",
    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMXSUR
    BVGhD7ZlbyE5ZGIB/h0TOckgMcihKXLgQihvkZppyMVEySJQS5cKNGTlEihJyKlIzaopLJeYCl0qUMkVm5FASNck4hXie8tZqt7//oP19luynnvr/d62911p7r7XX4WurqampqWmHAbgB/8LdOAi/K
    XriFvwPPyY+xbXYDbOnF17AtAFFr+BozJojmFb6MZ7E50lMH+I0zJJJ+B6jsiewL8pQPI1pY+5hP8wO+39U8jqWjYXl+BYj32+YHTsxKnjcQAP2YuT7B7Mb/J15IzIRP2DknYlZYQXfYVTQQR5jpMh
    ljHzbDeRG8av1BLfhbOyNwSaMPNcM5EZ788gfGEzBiNvNBmJ2NJrZZ2GKc0ykLTKQKz9iVPSOgQJnMdLtftlyFKOihwwU2IiRbnfMlqsYFV1moMAcjHS7WZb0wP8xKuqnuYgDPNJ1OGbHYIwKvsFGk
    +N9jHwLDOTGGIwK3jXQgHMY+Rwz2TEVo4I3DTRgP0a+sg9CU3FJvh4voTO3e40buANHoYzHzjTErXDk8+20hJG4D9NBXNS0pdgniZXNIcFPGPluGWgmvoED+Bqj0I78BWNX6HWNmI5xzSsDzcB1k4u
    74lJDn6H9ex7OQAeqhwuR/hJfJP+PxTJ8SJFHh2GluPa5jWkh+gDt12XL8x/QMVO8RldiGX6W0+3xZKyMXZhWQn3a69C31B6rsHit/omNSBs/10BVpIcE7q/dmnb2cG0IxrWpfgT6Yxl/Y+RbbKAq0
    obsMdBFLqKbpaILsQzPuaK81QaqIm2IR53NJp3dNxuoilY35AxGeVsNVEWrG9K08lrdkPTAwg9LZbS6Ia4aorzDBqoibYiz8zH0OKc7VoX3clXg2ZdLkyjPsiojbUjqIzyIP+M47CoTcAnaldITlFTL
    rgwr6d6gvVWuOiOfRw8ZfkWXLms+69/GfMIeLKTrsDItyzK/5AF1iD+drUB/OkvXQ1XpPZ08XSlbVksYgRb4O/6LZRXrjJ6+ew9/XvCeXx2X3x4WeALvMuYUOrH59tS/jZlmnvnoNTU1NTXfHW1tnwC
    cQnjYT8VifgAAAABJRU5ErkJggg==`
}
    render() {
        return (
            <div className="btn-group dropdown">
                <button className="btn btn-dark dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.upper)}>
                        <img className="button_icon" src={this.state.image} alt=""/>
                    Upper Limbs
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.arms, "arms")}> Arms (Biceps/Triceps) </button>   
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.shoulders, "shoulders")}> Shoulders </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.forearms, "forearms")}> Forearms </button>
                </div>
            </div>
        );
    }
}

