import { useAuth } from "../Context/AuthProvider";
import BackButton from '../../common/BackButton'

export default function Profile() {

    const { FAKE_USER } = useAuth();
    return (
        <div className="col-span-10 col-start-2 row-start-2 bg-white border rounded-lg h-fit p-2 flex flex-col gap-y-2">
            <BackButton/>
            <p className="font-bold">Hi {FAKE_USER.name} nice to meet you here!</p>
        </div>
    )
}
