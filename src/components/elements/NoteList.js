import { Spinner } from 'react-bootstrap';
import { useNotes } from '../../store';
import NoteListItem from './NoteListItem';

function NoteList({ items = [], active, onActive }) {
    const { loading } = useNotes();
    return (
        <nav>
            {loading && (
                <div className="sidebar-loading">
                    <Spinner animation="border" />
                </div>
            )}
            {!loading && items.length <= 0 && (
                <div className="sidebar-empty">
                    <strong>No Item Found</strong>
                </div>
            )}

            {!loading && items.length > 0 && (
                <ul className="notes-list">
                    {items.map((item) => (
                        <NoteListItem
                            key={item.id}
                            isActive={active === item.id}
                            onClick={onActive}
                            item={item}
                        />
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NoteList;
