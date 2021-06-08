import { Button } from 'react-bootstrap';

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque ipsam
repellat, veritatis quos beatae quibusdam ipsa maiores odit dolorum itaque
doloribus minus placeat ut quae asperiores magni culpa incidunt. 


Lorem ipsum
dolor sit amet consectetur adipisicing elit. Sint eaque ipsam repellat,
veritatis quos beatae quibusdam ipsa maiores odit dolorum itaque doloribus minus
placeat ut quae asperiores magni culpa incidunt. 

Lorem ipsum dolor sit amet
consectetur adipisicing elit. Sint eaque ipsam repellat, veritatis quos beatae
quibusdam ipsa maiores odit dolorum itaque doloribus minus placeat ut quae
asperiores magni culpa incidunt.`;

function NoteView({ toggleSidebar }) {
    return (
        <section className="note-viewer">
            <div className="note">
                <div className="note-header">
                    <h1 className="note-title">New Note</h1>
                    <div className="note-menu" role="menubar">
                        <small className="note-updated-at" role="status">
                            Updated on 22 Dec 2020 at 4:47 PM
                        </small>
                        <div className="d-flex">
                            <Button
                                className="note-button toggle-button"
                                size="sm"
                                variant="secondary"
                                onClick={toggleSidebar}
                            >
                                All Notes
                            </Button>
                            <Button className="note-button" size="sm" variant="primary">
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="note-preview">{text}</div>
            </div>
        </section>
    );
}

export default NoteView;
