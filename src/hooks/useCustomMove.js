import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const getNum = (param, defaultValue) => param ? parseInt(param) : defaultValue;

const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);

    const moveToList = (pageParam) => {
        let queryStr = '';
        if(pageParam){
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        }else {
            queryStr = createSearchParams({page, size}).toString();
        }

        navigate({pathname: `../list`, search: queryStr});
    };

    return {moveToList, page, size};
}

export default useCustomMove;

