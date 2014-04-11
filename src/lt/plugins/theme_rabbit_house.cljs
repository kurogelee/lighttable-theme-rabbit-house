(ns lt.plugins.theme-rabbit-house
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.style :as style]
            [lt.objs.settings :as settings])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-name "theme-rabbit-house")
(def theme "rabbit-house-light")
(def base-name "rabbit-house-light")

(defn skin-command [name]
  (let [skin (str base-name "-" name)]
    (cmd/command {:command (keyword (str "set-skin-" skin))
                  :hidden true
                  :desc (str plugin-name ": set skin " skin)
                  :exec #(do
                           (let [cur-skin (:skin @style/styles)]
                             (when-not (= skin cur-skin)
                               (object/remove-tag-behaviors :app [(list :lt.objs.style/set-skin cur-skin)])
                               (object/tag-behaviors :app [(list :lt.objs.style/set-skin skin)])))
                           (let [cur-theme (:theme @style/styles)]
                             (when-not (= theme cur-theme)
                               (object/remove-tag-behaviors :editor [(list :lt.objs.style/set-theme cur-theme)])
                               (object/tag-behaviors :editor [(list :lt.objs.style/set-theme theme)]))))})))

(doseq [n (range 1 6)] (skin-command n))
