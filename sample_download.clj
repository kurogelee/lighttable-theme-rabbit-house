(ns sample.download
  (:require [clojure.java.io :as io]))

(defn copy-url [in out]
  (with-open [r (io/input-stream in) w (io/output-stream out)]
    (io/copy r w)))

(defn copy-urls [& urls]
  (doseq [u (map io/as-url urls)]
    (copy-url u (java.io.File. "." (second (re-find #".*/(.+)" (.getPath u)))))))

;;ダウンロードファイルの一時保存先
(.getCanonicalPath (java.io.File. "."))

(def base-url "http://www.gochiusa.com/core_sys/images/main/cont/news/sp_w/1920/")

(apply copy-urls (map #(str base-url %) ["cocoa_1920.jpg" "chino_1920.jpg" "rize_1920.jpg" "syaro_1920.jpg" "chiya_1920.jpg"]))

