import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

const getNum = (param, defaultValue) => param ? parseInt(param) : defaultValue;

const useCustomMove = () => {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const [queryParams] = useSearchParams();
    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);
    const queryDefault = createSearchParams({page, size}).toString();

    const moveToList = (pageParam) => {
        let queryStr = '';
        if(pageParam){
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        }else {
            queryStr = queryDefault;
        }

        setRefresh(!refresh);

        navigate({pathname: `../list`, search: queryStr});
    };

    const moveToModify = (num) => {
        console.log(num);
        navigate({
            pathname: `../modify/${num}`,
            search: queryDefault
        });
    }

    const moveToRead = (num) => {
        console.log(queryDefault);
        navigate({
            pathname: `../read/${num}`,
            search: queryDefault
        })
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh};
}

export default useCustomMove;

