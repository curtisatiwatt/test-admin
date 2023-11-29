import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    if (!record) return null;

    let url = record[source];
    if (url) {
        // if url does not start with 'http://' or 'https://' then add 'https://'
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = `https://${url}`;
        }
    }

    return (
        <Link 
            href={url} 
            sx={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {url}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    );
};

export default MyUrlField;
