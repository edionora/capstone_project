import React, { Component } from 'react';

export default class Corebtn extends Component {
state = {
    core: "human_05_male_muscular_system-muscles_of_abdomen_ID",
    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM5SURB
    VFhH7ZZfSFNRHMdvFEZCFNFjPlQESkGBkfQPg9IgLU3cn8ogDKKHxLW7XEa5HASSkrMHs8xQ6I+b889K5zZJKzLdTXsoQxJXmTOhoF7S7c7t/Dp3nq3tehWC6+bDPvDl7p77O+d87rnnbqNixIgRI0
    qgN7mrkE0iRVb5ReiS7CPNSwNkPrUB2aTDYJNBIMgqe0AuRx8sZECd2eDrOAzcEVmOA1ilgKUbwSo7gyzyNGSTJcHTzHjSJbJgkV8zrSnB1VsoyCrthJ4T60nXyOAzZ495mrb5V01Iih+8V8+TrpEB
    WXK0rD4RPE3bwWtKBd+zQ4DMGXi1cifnysm8YJUkk66RAXpSV3hNB1rZxkRgG7cAq0/yzrTuLsUvSjoWYsMELZJ80i3yoLY9qz0t+3f5P9tyU7HcVFDMKkP4/IK/MNr0dz/J8thOz4StnE1Kk8vRpY
    KZTnj3ss4VKtf3Sg9VjOccKYkulQyrbe/tBdQl98t9elEJOoYFnd395xbj2kTKooeOcddyQg/7R+FR38is3L9YSFn0wCuYz5PiJ4+URoe7AxCvs7MOAbHZ2N0/KwZgzi8JSCTLJ1QqxQRNO5007XAq
    lZnkkvjo3rrSBOWCcTeQUj+TCsVWLGbHgUCw4NQ4TaeQEvHhJITlSPBNDGk0cXi1SiaUSjZULihJ0z/GVKrNZEhx4R4j9zgF5XDqLZ/HnUrVByExXt471Oo1ZFhxwSJ5fDEuxuYBGLt8RUhmvpiAopa
    RYcUFC1kCYlV2FzyvNQF+GYQkAinG++8+vx23qciQ4nK737WR+5Kufv0bBstrwiYNDd5vCO/FAq7PSEHBSizE8Go8+Mb2+gcVm3qbQzuiuRE6WViwnBcfz5JyP1gwgXtJeLXfvhQWriUl4jGkMcQNl5
    ZN8Sbzx0mrfFhETkrDwJIHiXxIPb04f3a777RkfVUXo9DJvl0qQvixLzght/dC+3yn6RxyaX7SLfp1Ge2G5P/NvQajkimvcX7U3pzmjnUNzQqhutAca3u8s/d6SeWoumiQuXa1mjsXquOciB5FZXYYT
    x41G2EphXMiehR1pN2wAzeULaVwTkQvRowYMRYPivoLd3s1wrz4c4QAAAAASUVORK5CYII=`
}


    render() {
        return (
            <div className="btn-group">
            <button className="btn btn-dark" type="button" onClick={()=> this.props.selectPart(this.state.core, "core")}>
            <img className="button_icon" src={this.state.image} alt=""/>Abdominal
            </button>
            </div>
        );
    }
}

