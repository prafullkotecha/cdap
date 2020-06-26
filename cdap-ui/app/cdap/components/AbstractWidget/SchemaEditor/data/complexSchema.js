const complex1 = {
  name: 'etlSchemaBody',
  schema: {
    type: 'record',
    name: 'etlSchemaBody',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'phone',
        type: ['string', 'null'],
      },
      {
        name: 'age',
        type: ['string', 'null'],
      },
      {
        name: 'arr',
        type: {
          type: 'array',
          items: ['string', 'null'],
        },
      },
      {
        name: 'map1',
        type: [
          {
            type: 'map',
            keys: ['long'],
            values: ['double'],
          },
          'null',
        ],
      },
      {
        name: 'something',
        type: [
          {
            type: 'map',
            keys: ['string'],
            values: ['int'],
          },
          'string',
        ],
      },
      {
        name: 'enum1',
        type: [
          'null',
          {
            type: 'enum',
            symbols: ['something', 'somethingelse', 'nothing', 'maybesomething'],
          },
        ],
      },
      {
        name: 'arr5',
        type: [
          {
            type: 'array',
            items: [
              {
                type: 'record',
                name: 'a6a50504dc85041ba8c60fb16d578be37',
                fields: [
                  {
                    name: 'rec1',
                    type: ['string', 'null'],
                  },
                  {
                    name: 'rec2',
                    type: ['string', 'null'],
                  },
                  {
                    name: 'rec3',
                    type: ['string', 'null'],
                  },
                ],
              },
              'null',
            ],
          },
          'null',
        ],
      },
      {
        name: 'birthtime',
        type: {
          type: 'long',
          logicalType: 'time-micros',
        },
      },
      {
        name: 'birthday',
        type: {
          type: 'long',
          logicalType: 'timestamp-micros',
        },
      },
      {
        name: 'mark',
        type: {
          type: 'bytes',
          logicalType: 'decimal',
          scale: 3,
          precision: 32,
        },
      },
      {
        name: 'mark2',
        type: {
          type: 'bytes',
          logicalType: 'decimal',
          scale: 1,
          precision: 12,
        },
      },
    ],
  },
};

const complex2 = {
  name: 'etlSchemaBody',
  schema: {
    type: 'record',
    name: 'etlSchemaBody',
    fields: [
      {
        name: 'arr5',
        type: [
          {
            type: 'array',
            items: [
              {
                type: 'record',
                name: 'a6a50504dc85041ba8c60fb16d578be37',
                fields: [
                  {
                    name: 'rec1',
                    type: ['string', 'null'],
                  },
                  {
                    name: 'rec2',
                    type: ['string', 'null'],
                  },
                  {
                    name: 'rec3',
                    type: ['string', 'null'],
                  },
                ],
              },
              'null',
            ],
          },
          'null',
        ],
      },
    ],
  },
};

const complex3 = {
  name: 'etlSchemaBody',
  schema: {
    type: 'record',
    name: 'etlSchemaBody',
    fields: [
      {
        name: 'sgk_erce_d31_id',
        type: ['string', 'null'],
      },
      {
        name: 'rec_sts_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_record_type',
        type: ['string', 'null'],
      },
      {
        name: 'd31_record_type_seq',
        type: ['long', 'null'],
      },
      {
        name: 'd31_appl_claim_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_appl_claim_id_seg_no',
        type: ['string', 'null'],
      },
      {
        name: 'd31_process_dt',
        type: ['string', 'null'],
      },
      {
        name: 'd31_constituent_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_payee_type_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cl_status_key',
        type: ['string', 'null'],
      },
      {
        name: 'd31_application_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cbor_prodcat_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_exp_line_number',
        type: ['long', 'null'],
      },
      {
        name: 'd31_med_cost_cat',
        type: ['string', 'null'],
      },
      {
        name: 'd31_med_cost_sub_cat',
        type: ['string', 'null'],
      },
      {
        name: 'd31_icd_dx_group_nbr',
        type: ['long', 'null'],
      },
      {
        name: 'd31_prcdr_group_nbr',
        type: ['long', 'null'],
      },
      {
        name: 'd31_group_prod_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_spclty_cat_code',
        type: ['string', 'null'],
      },
      {
        name: 'd31_spclty_cat_class_code',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pos_cat_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ctg_subctg_cncl_dt',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ctg_subctg_eff_dt',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cost_ctg_dsply_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_subctg_dsply_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cost_ctg_short_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_subctg_short_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cost_ctg_long_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_subctg_long_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ll_cob_true_other',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_cob_other',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_hcra_srchg_pd',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_hcra_pnlty_pd',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_hcra_pep_pd',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_hcra_non_srchg_pd',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_computed',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_computed',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_h_computed',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_cob_adj',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_cob_adj',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_accum',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_accum',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_h_accum',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_seg_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_seg_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_h_seg_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_ovrpmt_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_ovrpmt_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_h_ovrpmt_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_lci_ap_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_lci_ap_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_m_lcp_ap_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_lcp_ap_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_p_oip_ap_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_patient_paid',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_minus_debit_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_irs_wthld_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_pr_wthld_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_ph_fund_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_aetna_fund_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_phol_ar_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ll_fund_clm_dtl_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_financial_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_contract_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_funding_ind_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mm_network_id',
        type: ['long', 'null'],
      },
      {
        name: 'd31_base_med_prod_id',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bene_level_prod_id',
        type: ['long', 'null'],
      },
      {
        name: 'd31_d30_cfo_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_d30_sbsg_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_oon_cont_st',
        type: ['string', 'null'],
      },
      {
        name: 'd31_situs_st',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pat_cumb_id',
        type: ['long', 'null'],
      },
      {
        name: 'd31_mem_st_basis_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_prv_st_basis_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mem_appeal_rtn_cd',
        type: ['long', 'null'],
      },
      {
        name: 'd31_prv_appeal_rtn_cd',
        type: ['long', 'null'],
      },
      {
        name: 'd31_clm_adju_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_clm_rcvd_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_last_chngd_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_reworked_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pend_status_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pend_reason_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_clm_covrg_type_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_clm_off_num',
        type: ['string', 'null'],
      },
      {
        name: 'd31_icd_rvsn_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_icd_proc_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_icd_dx_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pip_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_sml_grp_refrm_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cl_pa_sex',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pat_age',
        type: ['long', 'null'],
      },
      {
        name: 'd31_pcp_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cap_off_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pcp_capof_ntwk_id',
        type: ['long', 'null'],
      },
      {
        name: 'd31_in_ntwk_cont_st_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_control_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_suffix_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_acct_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_plan_sum_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_prov_tin_num',
        type: ['string', 'null'],
      },
      {
        name: 'd31_prov_pin',
        type: ['string', 'null'],
      },
      {
        name: 'd31_prov_type',
        type: ['string', 'null'],
      },
      {
        name: 'd31_prov_spec_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_par_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_eci_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_lci_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_drg_billed_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_er_ind_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_issued_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bank_aba_num',
        type: ['string', 'null'],
      },
      {
        name: 'd31_chk_acnt_num',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_check_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_fund_rec_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_cob_ind',
        type: ['long', 'null'],
      },
      {
        name: 'd31_crs_claim_source',
        type: ['string', 'null'],
      },
      {
        name: 'd31_abh_liability_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_subro_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ors_clm_age',
        type: ['long', 'null'],
      },
      {
        name: 'd31_rework_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_rework_age',
        type: ['long', 'null'],
      },
      {
        name: 'd31_user_resp',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ors_clm_status',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cuc_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_cuc_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_owning_segment',
        type: ['string', 'null'],
      },
      {
        name: 'd31_owning_site_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_owning_office_key',
        type: ['long', 'null'],
      },
      {
        name: 'd31_owning_off_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_proc_resp_segmt',
        type: ['string', 'null'],
      },
      {
        name: 'd31_proc_resp_site_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_proc_resp_off',
        type: ['long', 'null'],
      },
      {
        name: 'd31_resp_unit',
        type: ['string', 'null'],
      },
      {
        name: 'd31_resp_type_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_proc_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_route_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_route_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_route_reason_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_route_area',
        type: ['string', 'null'],
      },
      {
        name: 'd31_resp_clm_off_nm',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pend_edit_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_eft_trace_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_funded_evnt_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_d40_mrkt_sbsg_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_d40_cfo_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_drg_outlier',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_bh_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mm_zip_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bic_area_cd',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bic_major',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bic_minor',
        type: ['long', 'null'],
      },
      {
        name: 'd31_pos_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_billed_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_proc_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_rev_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ndc_num_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_svc_unit_cnt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_inp_hosp_dt',
        type: ['long', 'null'],
      },
      {
        name: 'd31_dx_pntr_cd',
        type: ['long', 'null'],
      },
      {
        name: 'd31_precert_num',
        type: ['string', 'null'],
      },
      {
        name: 'd31_referral_num',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ded_amt_1',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ded_amt_2',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_cop_amt_1',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_cop_amt_2',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_coins_amt_1',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_coins_amt_2',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_actn_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_plan_sponsor_number',
        type: ['long', 'null'],
      },
      {
        name: 'd31_experience_rating_basis',
        type: ['string', 'null'],
      },
      {
        name: 'd31_type_life_code',
        type: ['long', 'null'],
      },
      {
        name: 'd31_type_claim_code',
        type: ['string', 'null'],
      },
      {
        name: 'd31_identification_code',
        type: ['string', 'null'],
      },
      {
        name: 'd31_gul_side_fund_indicator',
        type: ['string', 'null'],
      },
      {
        name: 'd31_gul_side_fund_amount',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_smry_dtl_excp_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_exp_acct_basis_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_clm_sttlmnt_input_src',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mem_resident_state_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_spread_margin_amt',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_ssn_or_badge_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_dt_clm_incrd',
        type: ['long', 'null'],
      },
      {
        name: 'd31_alt_fund_arrngmnt_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_resrve_resp_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_business_portfolio_segmnt',
        type: ['string', 'null'],
      },
      {
        name: 'd31_financial_le_cd_fin_view',
        type: ['string', 'null'],
      },
      {
        name: 'd31_contract_le_cd_fin_view',
        type: ['string', 'null'],
      },
      {
        name: 'd31_local_market',
        type: ['string', 'null'],
      },
      {
        name: 'd31_business_association_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_life_cycl_view',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ukey_data',
        type: ['long', 'null'],
      },
      {
        name: 'd31_mlr_contract_situs_state',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mlr_pool',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mlr_stoploss_situs_state',
        type: ['string', 'null'],
      },
      {
        name: 'd31_ml_stoploss_pool',
        type: ['string', 'null'],
      },
      {
        name: 'd31_default_dm_api_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_fund_dtl_amt_life',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_corp_exclusion_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd31_corp_spread_si_fi',
        type: ['string', 'null'],
      },
      {
        name: 'd31_pos_rebate',
        type: [
          {
            type: 'bytes',
            logicalType: 'decimal',
            precision: 38,
            scale: 9,
          },
          'null',
        ],
      },
      {
        name: 'd31_org_id_1',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_1',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_1',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_2',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_2',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_2',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_3',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_3',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_3',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_4',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_4',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_4',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_5',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_5',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_5',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_6',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_6',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_6',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_7',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_7',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_7',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_8',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_8',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_8',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_9',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_9',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_9',
        type: ['string', 'null'],
      },
      {
        name: 'd31_org_id_10',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_arrangement_10',
        type: ['long', 'null'],
      },
      {
        name: 'd31_org_type_10',
        type: ['string', 'null'],
      },
      {
        name: 'd31_spclty_grp_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_bic_area_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_bic_major',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_bic_minor',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_pat_ntwrk_idntfr',
        type: ['long', 'null'],
      },
      {
        name: 'd31_prmry_prdct_dstnctn_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_sld_typ_bnft_prdct_char_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_den_typ_bnft_prdct_char_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_grndfthr_indctr',
        type: ['string', 'null'],
      },
      {
        name: 'd31_affrdbl_cr_act_indctr',
        type: ['string', 'null'],
      },
      {
        name: 'd31_qlfd_hlth_pln_indctr',
        type: ['string', 'null'],
      },
      {
        name: 'd31_hios_hp_st_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_hios_hp_extrnl_idntfctn_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_hios_hp_vrnt_ext_idntf_id',
        type: ['string', 'null'],
      },
      {
        name: 'd31_hlthpln_issr_idntfr',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mtllc_lvl_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_fsah_int',
        type: ['string', 'null'],
      },
      {
        name: 'filler',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bic_seq_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bp_control_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bp_suffix_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bp_acct_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_bp_plan_sum_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_plnindctv_prdct_char_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_bp_bic_seq_num',
        type: ['long', 'null'],
      },
      {
        name: 'd31_mlr_as_of_date',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mm_county_code',
        type: ['string', 'null'],
      },
      {
        name: 'd31_fin_perm_reins_proxy_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd31_mrc_code',
        type: ['string', 'null'],
      },
    ],
  },
};

export { complex1, complex2, complex3 };
