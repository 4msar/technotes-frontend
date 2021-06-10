import trashIcon from '../../assets/icons/trash.svg';
import ApiService from '../../helpers/ApiService';
import { formatDate } from '../../helpers/utils';
import { useNotes } from '../../store';

function NoteListItem({ item, isActive, onClick }) {
    const { setNotes } = useNotes();
    const handleDelete = () => {
        // eslint-disable-next-line no-alert
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) {
            ApiService.deleteNote(item.id).then((result) => {
                if (result.note === 'deleted') {
                    setNotes((existing) => existing.filter((note) => note.id !== item.id));
                }
            });
        }
    };
    return (
        <li key={item.id}>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                onClick={() => onClick(item.id)}
                className={['sidebar-note-list-item', isActive && 'active'].join(' ')}
            >
                <header className="sidebar-note-header">
                    <strong>{item.title}</strong>
                    <small>{formatDate(item.last_edit ?? item.created, 'hh:mm aaa')}</small>
                </header>
                <button onClick={handleDelete} type="button" className="action-button">
                    <img src={trashIcon} alt="delete" />
                </button>
            </div>
        </li>
    );
}

export default NoteListItem;
