export default function Logo({ classNames = "" }) {
    return (
        <svg className={classNames} width="56" height="76" viewBox="0 0 56 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-violet-light" d="M6.20032 44.896C8.10135 47.6061 10.302 50.2926 12.5996 53.0973C17.8741 59.5363 23.659 66.5982 27.5 76C31.3118 66.5953 37.0827 59.6214 42.3553 53.2496C45.0607 49.9802 47.6349 46.8694 49.746 43.6701C44.7461 50.5368 36.6443 55 27.5 55C18.9119 55 11.2433 51.0633 6.20032 44.896Z" />
            <path className="fill-violet dark:fill-violet-lightest" fillRule="evenodd" clipRule="evenodd" d="M54.6336 23H39.1655C37.359 18.3199 32.8172 15 27.5 15C20.5964 15 15 20.5964 15 27.5C15 34.4036 20.5964 40 27.5 40C32.43 40 36.6934 37.146 38.7281 33H54.4499C51.9019 45.5523 40.8043 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C41.1553 0 52.486 9.95284 54.6336 23Z" />
        </svg>
    );
}
