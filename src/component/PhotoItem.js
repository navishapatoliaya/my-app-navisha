import React from "react";

const PhotoItem = ({data}) => {
    console.log(data);
    return(
        <tr>
            <td>{data.albumId}</td>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.url}</td>
            <td>{data.thumbnailUrl}</td>
        </tr>
    )
}
export default PhotoItem;