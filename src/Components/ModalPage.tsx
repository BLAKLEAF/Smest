import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Context } from "../Context/Context";
import { ActionType, IModal } from "../Reducer/Reducer";
import { Modal_Box_Style } from "../Styled-Components/Styled-Components";

export default function ModalPage() {
  let { state, dispatch } = useContext(Context);
  let { modal } = state;
  let { openModal, message, messageTitle } = modal as IModal;
  return (
    <Modal
      open={openModal as boolean}
      onClose={() =>
        dispatch({
          type: ActionType.MODAL_STATE,
          payload: {
            modal: {
              openModal: false,
            },
          },
        })
      }
    >
      <Box sx={Modal_Box_Style}>
        <Typography variant="h6" component="h2">
          {messageTitle}
        </Typography>
        <Typography sx={{ mt: 2 }}>{message}</Typography>
      </Box>
    </Modal>
  );
}
