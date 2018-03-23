import React, { Component } from 'react';

export default class LowerLimbsbtn extends Component {
state = {
    lower: 'human_05_male_muscular_system-muscles_of_lower_limb_ID',
    quads: "human_05_male_muscular_system-muscles_of_right_thigh_ID",
    glutes: "human_05_male_muscular_system-right_gluteal_muscles_ID",
    calves: "human_05_male_muscular_system-muscles_of_right_lower_leg_ID",
    image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVESUR
    BVFhH7ZhbTBxlFMfHGH 0x3mJfbWIrctkubAHpli7RktK0shSosEt5MPHVx6YtUFtsJdYLAm0pD1o1VUrZnVku5dK9ENOkmKjR+KAxPhijVYxJo5KmeImBczznm7PDLDO+sGOf+k9OduY7v3PZmfm
    ++Xa1O7pdgnT0IGSiHQ6b3dsPRtkQjhRsElTjYx5TPrcYyiWod4JM5BvMRNFhl3cijj6BECvaIqjGxzymfC4xnEtQ7wTpyGW3YjhRjXCpYBnfqrhHUA31knvVGPncYijXpKDeiZK+6lYME5V89X4
    SzBKMFi2wzy2GcwnmnejZaXcrhrofIe77WDBLEPN9inqpkyejBtsE806QjNY4iqVbzedPD6QEs0RjafUcMrM2bq41JJh3gtON7XglklvIaDAbTJRnBLPEY6pBZuwxlAMGmg4I5p2gq34e+5tyi738D
    OL7Pmqw8kvBLFGDX7EPe/bmxvQ1IhwNXxPMG+HB8AY4VL+Ch8OIF581C+ktqM4Hq+gWl/0qqCVaB3/Ds1UmYxDLMcNmDOeCzqZHBM1flLBZFWI7TrcsRcX4avL5S7sQRouXBbVEM3uZfYphNkmPB8d
    KHjjU0Cho/oLD9b3ZxMrO70fstJ2/RzN5+PEHBKd1cNOD+C7N4Kyf2XcoJntORl/6DcHzF3SEDXvynObYenfQWugPCk4NloawN5TLrImBI+FZwfMXnGi4bk/usKM0EcarWgXX+Bi79rizYtAd/lnw/
    AUn9v3hVsRucD7UI7gGb4dOuTF2g+6GPwXPX3 AqfNOtSI6dfeqC4BofuzI2g1cabgqev+Dc7u/citgN+nceF1yDvqe73Ri7wVDdt4LnL4gHZ7HLvVDW4MU9mwXX4NiuAjfGMsoFseCM4PkLJoLteL
    rOvRgZHAsvCWqJx9xYZWfqEIzt3r3uUNfuhmH/MnauLrR4ZLUg9NV+IaglHnNjebmBi5SLcgrqjcAI/IiD8mYYoDdDgnYpHXTcVY8wUjEgmCUYLj/DPuygL8Usx3As5aBc1wXzTjhWeQEvlSCepILZ
    Xc25ZoTBaqDXmrVIZwWjhdXsw6Fmk+UYjuUciUprxnsm1CtCavs0VmMWZJvigrTd+qD0PsEswWTh/ezDqX2rPMfy9swIVAvmnRC1uyBW/A/GaQuVkSs4ya8431+COASxkr9xgl55qkGKoVjOIW7vBfH
    SH9RVTDaaRY0Abff9i+J2CHT/IhpbTZZj+Orppd+L23uBUZFSDc7IJjReQrerfEHcDkFi64J5xYmdoXezur0VSXF7KxwJPQwT2+dVg9O0JnLR0ULaTW/7WhCH2MeMYjmGGxwLXuNcguQv9ewZgdfp2V
    nBsW3qOVptkApO134mqEM4Vfu5+kLZBjl2PMg/U1dQD7zGuQVdvyBe0qOKsE3SLGSzGiyin5Att2DOuX3Hqwc2QKZliRmrwWy85KMJdlLw9YsmwbjV4BVaeJO04E7vNovKDKXfuS8IbonH7IyK4VjOk
    W0wvmVM8PWLkkRUwhg/S7K8pGj7bvuEuchzglviMZORhTobwzk4l8rptza5eYmWlwX+B8Es4DTIRIsFtQTJNp8bq0z9G1Hm+Ltk3QKjphriPnArBunoLdRbHS9+HoNMZMk1JuYDzimoN4LEk59Yt
    9heLB2dF8QhurIfreU5B+cSxDuhvmMjpPb/srYgNfimIA6xz8EnKQflEsRbQaqliq7KDatYJvI7LTOPidsh+DC6mZpcXOWjNyDTVinu/0d4tfEhaux5XkYgFX1Uhv9TONe6UbEUw7EyfEe3SZr2LwbY
    iWiDSBoxAAAAAElFTkSuQmCC`
}
    render() {
        return (
            <div className="btn-group dropdown">
                <button className="btn btn-dark dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={()=> this.props.selectPart(this.state.lower, "lower limbs")}>
                        <img className="button_icon" src={this.state.image} alt=""/>
                        Lower Limbs
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.quads, "quads")}> Quadriceps </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.glutes, "glutes")}> Gluteal muscles </button>
                <button type="button" className="btn dropdown-item" onClick={()=> this.props.selectPart(this.state.calves, "calves")}> Calves </button>
                </div>
            </div>
        );
    }
}