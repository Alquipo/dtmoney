import Modal from 'react-modal'

type NewTransactionsModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionsModal({isOpen,onRequestClose}:NewTransactionsModalProps){
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
    <h2>Cadastrar transação</h2>
  </Modal>
  )
}
