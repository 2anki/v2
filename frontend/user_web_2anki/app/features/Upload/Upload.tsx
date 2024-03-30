import styles from "~/features/Upload/upload.module.css"
import {DocumentPlusIcon} from "~/features/Upload/components/DocumentPlusIcon";
import {DocumentIcon} from "~/features/Upload/components/DocumentIcon";

export const Upload = () => {
    const documents = [
        {name: "pdf_1", link: "#"},
        {name: "pdf_1", link: "#"}
    ]
    return <div >
        <div className={styles.pageContainer}>
            <header>
                <h1 className={styles.h1}>Upload your notes</h1>
                <div className={styles.headline}></div>
                <p>ZIP, HTML, CSV, Markdown, PNG and JPG are currently supported. If the file is bigger than 100MB
                    please split up your upload in multiple files.</p>
            </header>

            <form className={styles.form}>
                <div>
                    <DocumentPlusIcon></DocumentPlusIcon>
                </div>
                <p>
                    Browse and choose the notes you want to upload
                </p>
                <button>
                    Browse files
                </button>
            </form>
        </div>

        <footer className={styles.footer}>
            <h2>Recently Uploaded</h2>
            <div className={styles.footerHeadline}></div>
            <div className={styles.documentList}>
                {documents.map(doc => <div style={{width: "32px"}}>
                    <DocumentIcon>
                    </DocumentIcon>
                    <a href={doc.link}>{doc.name}</a>
                    </div>)}
            </div>
        </footer>

    </div>
}
