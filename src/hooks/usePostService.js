import {useState, useEffect} from 'react';
import {getPostsService, getPostContentByIdService} from '../services/post.js';


export function usePosts() {
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        keyword: '',
        pid: '',
        current: 1,
        pageSize: 20,
    });

    const [total, setTotal] = useState(0);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        setLoading(true);
        getPostsService(filter).then(({data: res}) => {
            // console.log(res);
            if(res.code >= 0) {
                setTotal(res.data.total);
                setPosts(res.data.posts);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, [filter]);

    const updateFilter = (f) => {
        setFilter({
            ...filter,
            ...f
        });
    };

    return { loading, filter, posts, total, updateFilter };
}

export function usePostContent(id) {
    const [loading, setLoading] = useState(false);

    const [content, setContent] = useState('');

    useEffect(() => {
        setLoading(true);
        getPostContentByIdService(id).then(({data: res}) => {
            // console.log(res);
            if(res.code >= 0) {
                setContent(res.data.content);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    return { loading, content };
}


export function useMarkdownModule(id) {
    const [mdx, setMDX] = useState({
        module: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        import('/api/markdown/module/'+id).then(({default: m}) => {
            setMDX({
                module: m,
            });
        }).catch((e) => {
            setError(e);
            setMessage(e.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    return { loading, module: mdx.module, error, message };
}
