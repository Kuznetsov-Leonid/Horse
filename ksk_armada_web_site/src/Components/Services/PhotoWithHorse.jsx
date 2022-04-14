/**
 * Create by Kuznetsov Leonid 
 * 11.04.2021
 * Photo With Horse
 */
import React from "react";
import { JumboPhotoWithHorse } from './ServiseComponents/Jumbotron';
import { ContentPhotoWithHorse } from './ServiseComponents/Content';

const PhotoWithHorse = () => {
    return(
        <>
            <JumboPhotoWithHorse/>
            <ContentPhotoWithHorse/>
        </>
    );
}
export default PhotoWithHorse