export default interface ITrafic {
    id: number;
    friendly_name: string;
    url: string;
    type: number;
    sub_type: string;
    keyword_type: null;
    keyword_case_type: null;
    keyword_value: string;
    http_username: string;
    http_password: string;
    port: string;
    interval: number;
    timeout: null | number;
    dots: JSX.Element[];
    status: number;
    create_datetime: number;
    uptimePercent: number;
    logs: {
        datetime: number;
        duration: number;
        id: number;
        reason: {
            code: string;
            detail: string;
        };
        type: number;
    }[];
}
