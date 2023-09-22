import React, { useEffect, useState } from "react";
import TopButton from "../components/Common/BackToTop/TopButton";
import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import PaginationComponent from "../components/Dashboard/Pagination/PaginationComponent";
import SearchComponent from "../components/Dashboard/Search/SearchComponent";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import { get100Coins } from "../functions/get100Coins";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
      setLoading(false);
    }
  };

  return (
    <>
      <TopButton />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          <Header />
          <SearchComponent search={search} onChange={onChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default DashboardPage;
