import { useGetEbooksQuery } from '../../services/apiSlice';
import MainLayout from "../../layouts/mainLayout/MainLayout";
import { Slider } from "../../features/slider/Slider";


const MainPage = () => {
  const { data: ebooksData, isError: ebooksIsError, isLoading: ebooksIsLoading } = useGetEbooksQuery('');

  return (
    <MainLayout>
      {ebooksData ? <Slider itemsCount={12} data={ebooksData} /> : null}
    </MainLayout>
  );
}

export default MainPage;