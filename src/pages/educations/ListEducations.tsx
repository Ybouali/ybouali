import ItemEducation from './ItemEdication';

export type EducationType = {
    school: string;
    dates: string;
    description: string;
    degree: string;
    fieldOfStudy: string;
    location: string;
    urlSchool: string;
    urlLogo: string;
};

function ListEducations() {
    const education: EducationType[] = [
        {
            school: '1337 School',
            dates: '2021 – Present',
            description:
                'Ongoing training in Computer Science and Software Engineering',
            degree: 'Advanced Developer Certificate (Expected 2026)',
            fieldOfStudy: 'Computer Science and Software Engineering',
            location: 'Ben Guerir, Morocco',
            urlSchool: 'https://1337.ma',
            urlLogo:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjDUu5Cugm9VpGLWK5FN-c6zwi9Y1x8DZGA&s',
        },
        {
            school: 'Institut Multihexa',
            dates: '2019 – 2021',
            description: 'Ongoing training in Multimedia Development',
            degree: 'Diploma in Multimedia Development',
            fieldOfStudy: 'Multimedia Development',
            location: 'Errachidia, Morocco',
            urlSchool: 'https://multihexa.ma',
            urlLogo: 'https://www.multihexa-meknes.ma/Assets/acredite.png',
        },
        {
            school: 'Faculty of Sciences, Moulay Ismail University',
            dates: '2018 – 2019',
            description: 'First year in Mathematics and Computer Science',
            degree: 'Licence (1st year)',
            fieldOfStudy: 'Mathematics & Informatics',
            location: 'Meknès, Morocco',
            urlSchool: 'https://www.fs-umi.ac.ma/',
            urlLogo:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MAAE3Qg92385mR9yovE1f8d_RHh3nDUUhQ&s',
        },
        {
            school: 'Ibn Tahir High School',
            dates: '2016 – 2017',
            description: 'Scientific Baccalaureate',
            degree: 'Baccalaureate',
            fieldOfStudy: 'Science Stream',
            location: 'Errachidia, Morocco',
            urlSchool: 'https://www.9rayti.com/ecole/cpge-errachidia-ibn-tahir',
            urlLogo:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AVuWbxb4CZQnjuaKdteM-UBbEdcz3dHopw&s',
        },
    ];

    return (
        <div className="flex flex-col gap-6 w-full ">
            {education.map((edu, index) => (
                <ItemEducation key={index} {...edu} />
            ))}
        </div>
    );
}

export default ListEducations;
