import {GrClose} from 'react-icons/gr';

const Modal = () => {
    return (
        <div className="modal_wrapper">
            <div className="modal_overlay"></div>
            <div className="modal">
                <div className="header">
                    <GrClose className="close_modal icon"/>
                    <h2><center>Biryani</center></h2>
                </div>
                <div className="body">
                    <img src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" alt="" />
                    <div className="conten">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus fuga quaerat fugit laboriosam inventore voluptatibus eaque, a quam. Eius quidem atque quam laboriosam rem, temporibus dignissimos vitae minus in?
                    </div>
                </div>

                <div className="footer">
                    <button className="close_modal btn">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;