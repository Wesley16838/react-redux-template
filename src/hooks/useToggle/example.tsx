import useToggle from "./useToggle";
import { Modal } from 'react-bootstrap';

const Example = () => {
    const [show, toggleShow] = useToggle();
        return (
            <Modal show={show} onClose={toggleShow}>
                <h1>Hello there</h1>
            </Modal>
        );
}

export default Example