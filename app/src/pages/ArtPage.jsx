import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import ArtImageContainer from '../components/ArtImageContainer';
import ArtImageModal from '../components/ArtImageModal';
// import ArtCommissionModal from '../components/ArtCommissionModal';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const MISC_SPREADSHEET_ID = 'static-art-images';

const ArtPage = () => {

    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const miscData = await getSpreadsheetDataAsJson(MISC_SPREADSHEET_ID);
            if (miscData && miscData.length > 0) {
                // sort images by provided date (desc)
                miscData.sort((a, b) => {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    if (dateA < dateB) return 1;
                    if (dateA > dateB) return -1;
                    return 0;
                });

                setImages(miscData);
            }
        };
        fetchData();
    }, []);

    const onClickImage = (imageIndex) => {
        setSelectedImageIndex(imageIndex);
        setIsModalOpen(true);
    };

    const mod = (n, m) => (n % m + m) % m;

    const incrementImageIndex = (increment) => {
        const newIndex = mod(selectedImageIndex + increment, images.length);
        setSelectedImageIndex(newIndex);
    }

    return (
        <div className='page-art'>
            {/* <ArtCommissionModal bgColor={colors.bg_dark} /> */}
            <MenuBar fontColor={colors.dark} bgColor={colors.bg_light} />
            <SocialsMenu excludeExternalLinks={true} color={colors.dark} />
            <div className='art-body'>
                <h1 className={colors.dark}>{text.artPageHeader}</h1>
                <div className='art-images-container'>
                {images.map((imgData, index) => <ArtImageContainer key={imgData.name}
                                                                   imageData={imgData}
                                                                   onClick={() => onClickImage(index)} />)}
                {isModalOpen ? 
                    <ArtImageModal imageData={images[selectedImageIndex]}
                                   onClickExit={() => setIsModalOpen(false)}
                                   onClickLeft={() => incrementImageIndex(-1)}
                                   onClickRight={() => incrementImageIndex(1)}/>
                    : ''}
                </div>
            </div>
        </div>
    );
};

export default ArtPage;
