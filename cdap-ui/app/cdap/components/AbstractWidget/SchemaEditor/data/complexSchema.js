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

const complex4 = {
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
        name: 'd31_rec_sts_cd',
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
      {
        name: 'sgk_erce_d10_id',
        type: ['string', 'null'],
      },
      {
        name: 'd10_record_type',
        type: ['string', 'null'],
      },
      {
        name: 'd10_rec_sts_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_record_type_seq',
        type: ['long', 'null'],
      },
      {
        name: 'd10_appl_claim_id',
        type: ['string', 'null'],
      },
      {
        name: 'd10_appl_claim_id_seg_no',
        type: ['string', 'null'],
      },
      {
        name: 'd10_process_dt',
        type: ['string', 'null'],
      },
      {
        name: 'd10_constituent_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10payee_type_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_cl_status_key',
        type: ['string', 'null'],
      },
      {
        name: 'd10_application_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_cbor_prodcat_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_pz_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_ci_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_rec_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_pa_group',
        type: ['string', 'null'],
      },
      {
        name: 'cl_pa_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_pa_rel',
        type: ['string', 'null'],
      },
      {
        name: 'cl_pa_id_name',
        type: ['string', 'null'],
      },
      {
        name: 'cl_sys_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_cl_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_cl_gen',
        type: ['long', 'null'],
      },
      {
        name: 'cl_key_fil',
        type: ['string', 'null'],
      },
      {
        name: 'exp_line_number',
        type: ['long', 'null'],
      },
      {
        name: 'cl_d_expl_pfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_expl_sfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cg_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cg_rule',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_dp_id_orig',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_dp_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_dp_id_rel',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_dp_rule',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_ip_id_pfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_rel_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_le_idx',
        type: ['long', 'null'],
      },
      {
        name: 'cl_d_or_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_or_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_or_ind2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_or_x_amt',
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
        name: 'cl_d_r_c_amt',
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
        name: 'cl_d_tc_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_ut_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_3',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_4',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_5',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_6',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_7',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_tooth_8',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_surf_e_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_surf_e_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_surf_e_3',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_surf_e_4',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_surf_e_5',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_low_tooth',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_high_tooth',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_pf_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cap_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_chg',
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
        name: 'cl_d_considered_chg',
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
        name: 'cl_d_act_price',
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
        name: 'cl_d_act_price_source',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_alt_price',
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
        name: 'cl_d_alt_price_source',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_ctr',
        type: ['long', 'null'],
      },
      {
        name: 'cl_d_disallow',
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
        name: 'cl_d_ue_disallow',
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
        name: 'cl_d_ue_disallow_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_ue_amt1',
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
        name: 'cl_d_ue_amt1_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_adj_amt',
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
        name: 'cl_d_adj_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_adj_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_chk_seg_amt',
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
        name: 'cl_d_allow',
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
        name: 'cl_d_ctr_allow',
        type: ['long', 'null'],
      },
      {
        name: 'cl_d_ded_t',
        type: ['long', 'null'],
      },
      {
        name: 'cl_d_cob_adj',
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
        name: 'cl_d_cob_other_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cob_allow_max_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cob_disallow_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_cob_other',
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
        name: 'cl_d_cob_allow_max',
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
        name: 'cl_d_cob_disallow',
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
        name: 'cl_x_withhold_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_supp_deal_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_supp_deal_desc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_um_prov_flag_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_um_rev_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_um_ques_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_um_rule_no',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_copay_fee_amt',
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
        name: 'cl_x_dep_cop_cred_amt',
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
        name: 'cl_x_um_resp_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_tot_coins',
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
        name: 'cl_x_maj_coins',
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
        name: 'cl_x_hcra_pin_suf',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_clmchk',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_drvpvdi',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_drivpcc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_pd_pcc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_reimtyp',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_ngrtlin',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_stplstp',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_stplsam',
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
        name: 'cl_x_adm_outlram',
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
        name: 'cl_x_adm_rtalwam',
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
        name: 'cl_x_adm_dysatpd',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_ntadv_actcd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_rc_actcd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_ndc_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_rc_price',
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
        name: 'cl_x_pharm_seqno',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_pricer_amt',
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
        name: 'cl_x_orig_pos',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_clmchk_percent',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_byreport_sw',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_code_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_ffs_line_qual_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_ffs_sched_qual_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_ffs_line_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_ffs_line_id_comm_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_ffs_ss_seq_no',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_dpay_qual_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_rating_system_used_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_discount_percent',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_facility_fee',
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
        name: 'cl_x_payment_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_bic',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_hcra_m_srchg_pd',
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
        name: 'cl_x_hcra_b_srchg_pd',
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
        name: 'cl_x_line_item_control',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_ahf_bfd_paid',
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
        name: 'cl_x_hcra_b_pnlty_pd',
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
        name: 'cl_x_hcra_b_pep_pd',
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
        name: 'cl_x_hcra_non_srchg_b_pd',
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
        name: 'cl_x_hcra_m_pnlty_pd',
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
        name: 'cl_x_hcra_m_pep_pd',
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
        name: 'cl_x_hcra_non_srchg_m_pd',
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
        name: 'cl_x_hcra_cons_srchg',
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
        name: 'cl_x_hcra_cons_pnlty',
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
        name: 'cl_x_hcra_cons_pep',
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
        name: 'cl_x_nap_svg_amt',
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
        name: 'cl_x_new_clause_diff',
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
        name: 'cl_x_um_diagtool',
        type: ['string', 'null'],
      },
      {
        name: 'filler_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_dx_prod_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_poscat_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_expl_pfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_expl_sfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_se_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_se_rule',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_rc_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_ssn',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_suf',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_spec',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_spec_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_type_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pr_specialty',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_room_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ip_id_pfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ip_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_ip_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_ip_sfx',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_id_idx',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_le_idx',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_pan_idx',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_payee',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_or_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_or_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_or_ind2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_or_x_amt',
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
        name: 'cl_h_or_p_amt',
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
        name: 'cl_h_alt_rule_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pf_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_cap_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_chg',
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
        name: 'cl_h_considered_chg',
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
        name: 'cl_h_act_price',
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
        name: 'cl_h_act_price_source',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_alt_price',
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
        name: 'cl_h_alt_price_source',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ctr',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_rate',
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
        name: 'cl_h_disallow',
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
        name: 'cl_h_ue_disallow',
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
        name: 'cl_h_ue_disallow_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ue_amt1',
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
        name: 'cl_h_ue_amt1_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_adj_amt',
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
        name: 'cl_h_adj_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_adj_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_chk_seg_amt',
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
        name: 'cl_h_allow_1',
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
        name: 'cl_h_ctr_allow_1',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_se_opt_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ded_t_1',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_cob_adj_1',
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
        name: 'cl_h_allow_2',
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
        name: 'cl_h_ctr_allow_2',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_se_opt_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ded_t_2',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_cob_adj_2',
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
        name: 'cl_h_ref_line_ptr',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_proc_opt8_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_proc_opt8_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_act_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_reas_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_line_ptr',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_ce_format_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_cob_other_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_cob_allow_max_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_cob_disallow_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_cob_other',
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
        name: 'cl_h_cob_allow_max',
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
        name: 'cl_h_cob_disallow',
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
        name: 'cl_h_835_type',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_auth_line_ptr',
        type: ['long', 'null'],
      },
      {
        name: 'cl_h_se_pen_disallow',
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
        name: 'cl_h_se_pen_disallow_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_pl',
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
        name: 'cl_disallow_pl_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_pricing',
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
        name: 'cl_disallow_pricing_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_ppo_disc',
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
        name: 'cl_disallow_ppo_disc_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_se_max',
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
        name: 'cl_disallow_se_max_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_rskwth',
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
        name: 'cl_disallow_rskwth_expl',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_se_max2',
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
        name: 'cl_disallow_se_max_expl2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_se_max3',
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
        name: 'cl_disallow_se_max_expl3',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_se_max4',
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
        name: 'cl_disallow_se_max_expl4',
        type: ['string', 'null'],
      },
      {
        name: 'cl_disallow_se_max5',
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
        name: 'cl_disallow_se_max_expl5',
        type: ['string', 'null'],
      },
      {
        name: 'reviewer_aetna_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_um_user_home_site_cd',
        type: ['string', 'null'],
      },
      {
        name: 'prov_acpt_mdcr_assgn_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fsapmem_amt',
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
        name: 'cl_x_fsapprv_amt',
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
        name: 'cl_x_ahf_apply_ded_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_ahf_apply_ded_amt',
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
        name: 'cl_x_ln_itm_typ_cd',
        type: ['string', 'null'],
      },
      {
        name: 'dent_x_avg_chg_amt',
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
        name: 'dent_x_nwk_sav_amt',
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
        name: 'd10_cntrcptv_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_gnrc_drg_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_copay_category',
        type: ['string', 'null'],
      },
      {
        name: 'line_acas_data_filler',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_cc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_yy',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_fill1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_mm',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_fill2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_from_dt_dd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_cc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_yy',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_fill1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_mm',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_fill2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_to_dt_dd',
        type: ['string', 'null'],
      },
      {
        name: 'claim_source_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_pos',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_type_ind',
        type: ['string', 'null'],
      },
      {
        name: 'authorization_number',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_cc',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_yy',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_fill1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_mm',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_fill2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_hosp_adm_dt_dd',
        type: ['string', 'null'],
      },
      {
        name: 'established_priced_amount',
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
        name: 'cl_h_paid',
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
        name: 'cl_d_paid',
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
        name: 'cl_x_prepaid_amt',
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
        name: 'cl_x_supp_deal_amt',
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
        name: 'cl_h_deduct',
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
        name: 'cl_d_deduct',
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
        name: 'cl_h_copay',
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
        name: 'cl_d_copay',
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
        name: 'not_covd_amt_1',
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
        name: 'not_covd_action_code_1',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_2',
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
        name: 'not_covd_action_code_2',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_3',
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
        name: 'not_covd_action_code_3',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_4',
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
        name: 'not_covd_action_code_4',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_5',
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
        name: 'not_covd_action_code_5',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_6',
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
        name: 'not_covd_action_code_6',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_7',
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
        name: 'not_covd_action_code_7',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_8',
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
        name: 'not_covd_action_code_8',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_9',
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
        name: 'not_covd_action_code_9',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_10',
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
        name: 'not_covd_action_code_10',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_11',
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
        name: 'not_covd_action_code_11',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_12',
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
        name: 'not_covd_action_code_12',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_13',
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
        name: 'not_covd_action_code_13',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_14',
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
        name: 'not_covd_action_code_14',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_15',
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
        name: 'not_covd_action_code_15',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_16',
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
        name: 'not_covd_action_code_16',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_17',
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
        name: 'not_covd_action_code_17',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_18',
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
        name: 'not_covd_action_code_18',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_19',
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
        name: 'not_covd_action_code_19',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_amt_20',
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
        name: 'not_covd_action_code_20',
        type: ['string', 'null'],
      },
      {
        name: 'not_covd_more_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_ahf_paid',
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
        name: 'cl_prelim_amt',
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
        name: 'lec_casrt_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_icf_paid_amt',
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
        name: 'line_mci_data_filler',
        type: ['string', 'null'],
      },
      {
        name: 'acas_pricing_category',
        type: ['string', 'null'],
      },
      {
        name: 'assignment_code',
        type: ['string', 'null'],
      },
      {
        name: 'caus_code',
        type: ['string', 'null'],
      },
      {
        name: 'allowed_exp',
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
        name: 'benefit_this_line',
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
        name: 'covered_expenses',
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
        name: 'mcp_coins_denied_amount',
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
        name: 'med_aec_pl_srvc_cd',
        type: ['string', 'null'],
      },
      {
        name: 'submitted_expenses',
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
        name: 'type_of_service_code',
        type: ['string', 'null'],
      },
      {
        name: 'acas_priced_amount',
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
        name: 'ahf_share_of_ded',
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
        name: 'ahf_share_of_coins',
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
        name: 'ahf_share_of_copay',
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
        name: 'line_derived_data_filler',
        type: ['string', 'null'],
      },
      {
        name: 'line_dm_data_filler',
        type: ['string', 'null'],
      },
      {
        name: 'line_epdb_data_filler',
        type: ['string', 'null'],
      },
      {
        name: 'd10_orig_dlgtn_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd10_fnl_dlgtn_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd10_dlgtd_fin_rsk_entity',
        type: ['string', 'null'],
      },
      {
        name: 'd10_dlgtn_cntrct_pbg',
        type: ['long', 'null'],
      },
      {
        name: 'd10_cppd_hsptl_pin',
        type: ['long', 'null'],
      },
      {
        name: 'd10_cppd_hsptl_srv_loc_num',
        type: ['long', 'null'],
      },
      {
        name: 'd10_dlgtn_ln_item',
        type: ['long', 'null'],
      },
      {
        name: 'd10_dlgtn_qlfr_id',
        type: ['long', 'null'],
      },
      {
        name: 'd10_prfssnl_vs_fclty_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd10_se_rule',
        type: ['string', 'null'],
      },
      {
        name: 'd10_max_refbase_amt',
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
        name: 'd10_servc_sb_cd',
        type: ['string', 'null'],
      },
      {
        name: 'filler_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_withhold_amt',
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
        name: 'cl_x_d_aprvd_fee_line_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_d_um_org_pr_amt',
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
        name: 'cl_x_d_um_org_cns_rt',
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
        name: 'cl_x_d_um_org_cpy_amt',
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
        name: 'cl_x_line_item_contains_1',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_1',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_2',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_2',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_3',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_3',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_4',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_4',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_5',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_5',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_6',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_6',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_7',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_7',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_8',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_8',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_9',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_9',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_10',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_10',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_line_item_contains_11',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_line_item_delimitr_11',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_d_std_fee_amt',
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
        name: 'cl_x_origsub_amt',
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
        name: 'cl_x_d_rmn_lmt_amt',
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
        name: 'cl_x_d_ahf_excp_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fsa_denied_amount',
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
        name: 'cl_x_fsa_denial_remark_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_d_encdeny_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_d_sppdata_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_d_neg_fee_amt',
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
        name: 'cl_x_adm_tos',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_rolupin',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_tdays',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_adm_tdysalw',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_adm_clcngam',
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
        name: 'cl_x_adm_adjngam',
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
        name: 'cl_x_adm_cvrdchg',
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
        name: 'cl_x_adm_amprepd',
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
        name: 'cl_x_adm_alwamt',
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
        name: 'cl_x_adm_dscamt',
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
        name: 'cl_x_adm_mnovrin',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adm_intcdes',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_da_rule_nm_serv',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_da_rule_nm_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_da_rule_nm_pr_typ',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_da_rule_nm_st',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_da_rule_num',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_da_rule_version',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_adm_calc_outlier_amt',
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
        name: 'cl_x_adm_calc_stoploss_amt',
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
        name: 'cl_x_pre_ex_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_rc_rt_amt',
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
        name: 'cl_x_rc_rtsrc_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_nap_rt_amt',
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
        name: 'cl_x_bhmdben_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_mat_mom_svc_grouping_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_loc_outlier_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_pct_of_rate_sys',
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
        name: 'cl_x_pay_in_addition_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_cont_conc_pct',
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
        name: 'cl_x_prof_comp_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_pat_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_neg_svc_grouping',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_outlier_svc_grouping',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_outlier_payment_method',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_prof_comp_qual_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_fdbplex1_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fdplex1_amt',
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
        name: 'cl_x_fdbplex2_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fdplex2_amt',
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
        name: 'cl_x_fdbplex3_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fdplex3_amt',
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
        name: 'cl_x_fdbplex4_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_fdplex4_amt',
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
        name: 'cl_x_dtl_ref_audit_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_dtl_ref_los_auth',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_mdfr1_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_mdfr2_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_mdfr3_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_arl_tq_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_wamsgbp_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_xwalk_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_sr_actdscn_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_sr_action_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_npsp_tos_ind',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_bpelig_cd',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_adjust_amt',
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
        name: 'cl_x_ss_id',
        type: ['long', 'null'],
      },
      {
        name: 'cl_x_pep_b_pd',
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
        name: 'rf_ref_no',
        type: ['string', 'null'],
      },
      {
        name: 'rf_ref_seg',
        type: ['string', 'null'],
      },
      {
        name: 'rf_tcn_clmoff',
        type: ['string', 'null'],
      },
      {
        name: 'rf_tcn_jul_dt',
        type: ['string', 'null'],
      },
      {
        name: 'rf_tcn_seq_num',
        type: ['string', 'null'],
      },
      {
        name: 'rf_ref_pr_ssn',
        type: ['string', 'null'],
      },
      {
        name: 'rf_pr_hosp_ssn',
        type: ['string', 'null'],
      },
      {
        name: 'rf_spc_fam_cd',
        type: ['string', 'null'],
      },
      {
        name: 'hierarchy_number_1',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_1',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_1',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_1',
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
        name: 'coinsurance_rate_1',
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
        name: 'adjustment_amount_1',
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
        name: 'interim_benefit_payable_amt_1',
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
        name: 'interim_balance_amount_1',
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
        name: 'hierarchy_number_2',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_2',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_2',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_2',
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
        name: 'coinsurance_rate_2',
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
        name: 'adjustment_amount_2',
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
        name: 'interim_benefit_payable_amt_2',
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
        name: 'interim_balance_amount_2',
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
        name: 'hierarchy_number_3',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_3',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_3',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_3',
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
        name: 'coinsurance_rate_3',
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
        name: 'adjustment_amount_3',
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
        name: 'interim_benefit_payable_amt_3',
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
        name: 'interim_balance_amount_3',
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
        name: 'hierarchy_number_4',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_4',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_4',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_4',
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
        name: 'coinsurance_rate_4',
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
        name: 'adjustment_amount_4',
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
        name: 'interim_benefit_payable_amt_4',
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
        name: 'interim_balance_amount_4',
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
        name: 'hierarchy_number_5',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_5',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_5',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_5',
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
        name: 'coinsurance_rate_5',
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
        name: 'adjustment_amount_5',
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
        name: 'interim_benefit_payable_amt_5',
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
        name: 'interim_balance_amount_5',
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
        name: 'hierarchy_number_6',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_6',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_6',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_6',
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
        name: 'coinsurance_rate_6',
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
        name: 'adjustment_amount_6',
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
        name: 'interim_benefit_payable_amt_6',
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
        name: 'interim_balance_amount_6',
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
        name: 'hierarchy_number_7',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_7',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_7',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_7',
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
        name: 'coinsurance_rate_7',
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
        name: 'adjustment_amount_7',
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
        name: 'interim_benefit_payable_amt_7',
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
        name: 'interim_balance_amount_7',
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
        name: 'hierarchy_number_8',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_8',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_8',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_8',
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
        name: 'coinsurance_rate_8',
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
        name: 'adjustment_amount_8',
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
        name: 'interim_benefit_payable_amt_8',
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
        name: 'interim_balance_amount_8',
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
        name: 'hierarchy_number_9',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_9',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_9',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_9',
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
        name: 'coinsurance_rate_9',
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
        name: 'adjustment_amount_9',
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
        name: 'interim_benefit_payable_amt_9',
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
        name: 'interim_balance_amount_9',
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
        name: 'hierarchy_number_10',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_10',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_10',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_10',
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
        name: 'coinsurance_rate_10',
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
        name: 'adjustment_amount_10',
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
        name: 'interim_benefit_payable_amt_10',
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
        name: 'interim_balance_amount_10',
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
        name: 'hierarchy_number_11',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_11',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_11',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_11',
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
        name: 'coinsurance_rate_11',
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
        name: 'adjustment_amount_11',
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
        name: 'interim_benefit_payable_amt_11',
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
        name: 'interim_balance_amount_11',
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
        name: 'hierarchy_number_12',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_12',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_12',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_12',
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
        name: 'coinsurance_rate_12',
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
        name: 'adjustment_amount_12',
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
        name: 'interim_benefit_payable_amt_12',
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
        name: 'interim_balance_amount_12',
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
        name: 'hierarchy_number_13',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_13',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_13',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_13',
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
        name: 'coinsurance_rate_13',
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
        name: 'adjustment_amount_13',
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
        name: 'interim_benefit_payable_amt_13',
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
        name: 'interim_balance_amount_13',
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
        name: 'hierarchy_number_14',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_14',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_14',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_14',
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
        name: 'coinsurance_rate_14',
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
        name: 'adjustment_amount_14',
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
        name: 'interim_benefit_payable_amt_14',
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
        name: 'interim_balance_amount_14',
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
        name: 'hierarchy_number_15',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_15',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_15',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_15',
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
        name: 'coinsurance_rate_15',
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
        name: 'adjustment_amount_15',
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
        name: 'interim_benefit_payable_amt_15',
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
        name: 'interim_balance_amount_15',
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
        name: 'hierarchy_number_16',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_16',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_16',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_16',
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
        name: 'coinsurance_rate_16',
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
        name: 'adjustment_amount_16',
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
        name: 'interim_benefit_payable_amt_16',
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
        name: 'interim_balance_amount_16',
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
        name: 'hierarchy_number_17',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_17',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_17',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_17',
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
        name: 'coinsurance_rate_17',
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
        name: 'adjustment_amount_17',
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
        name: 'interim_benefit_payable_amt_17',
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
        name: 'interim_balance_amount_17',
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
        name: 'hierarchy_number_18',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_18',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_18',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_18',
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
        name: 'coinsurance_rate_18',
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
        name: 'adjustment_amount_18',
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
        name: 'interim_benefit_payable_amt_18',
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
        name: 'interim_balance_amount_18',
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
        name: 'hierarchy_number_19',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_19',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_19',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_19',
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
        name: 'coinsurance_rate_19',
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
        name: 'adjustment_amount_19',
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
        name: 'interim_benefit_payable_amt_19',
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
        name: 'interim_balance_amount_19',
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
        name: 'hierarchy_number_20',
        type: ['long', 'null'],
      },
      {
        name: 'benefit_type_code_20',
        type: ['string', 'null'],
      },
      {
        name: 'adjustment_type_code_20',
        type: ['string', 'null'],
      },
      {
        name: 'interim_allowable_amount_20',
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
        name: 'coinsurance_rate_20',
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
        name: 'adjustment_amount_20',
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
        name: 'interim_benefit_payable_amt_20',
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
        name: 'interim_balance_amount_20',
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
        name: 'frli_ex_cd',
        type: ['string', 'null'],
      },
      {
        name: 'frli_disallow_amt',
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
        name: 'frli_flag_cd',
        type: ['string', 'null'],
      },
      {
        name: 'ebtpalwind',
        type: ['string', 'null'],
      },
      {
        name: 'ebwh',
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
        name: 'ebmdcrasgn',
        type: ['string', 'null'],
      },
      {
        name: 'ebmdcrcntadj',
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
        name: 'ebmdcrliab',
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
        name: 'ebmdcrprff',
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
        name: 'ebmdcrnc',
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
        name: 'ebmdcrhcpcs',
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
        name: 'ebrmrcd',
        type: ['string', 'null'],
      },
      {
        name: 'ebbpind',
        type: ['string', 'null'],
      },
      {
        name: 'ebarc',
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
        name: 'ebsysalw',
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
        name: 'ebfromdt',
        type: ['string', 'null'],
      },
      {
        name: 'ebtodt',
        type: ['string', 'null'],
      },
      {
        name: 'ebproccd',
        type: ['string', 'null'],
      },
      {
        name: 'ebchgamt',
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
        name: 'eb_mdcr_ded_amt',
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
        name: 'eb_mdcr_coins_amt',
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
        name: 'eb_mdcr_apprvd_amt',
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
        name: 'cobca_amt',
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
        name: 'umdcsd_cl_cs_gen',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_seq_no',
        type: ['long', 'null'],
      },
      {
        name: 'umdcsd_comment_cd',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_tooth_cd',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_dp_id',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_um_rr_cd',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_dp_id1',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_from_dt1',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_low_tth1',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_hgh_tth1',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_dp_id2',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_from_dt2',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_low_tth2',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_hgh_tth2',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_dp_id3',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_from_dt3',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_low_tth3',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_hgh_tth3',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_dp_id4',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_from_dt4',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_low_tth4',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_hd_hgh_tth4',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_otooth_cd',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsd_ocdt_cd',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsc_cl_cs_gen',
        type: ['string', 'null'],
      },
      {
        name: 'umdcsc_seq_no',
        type: ['long', 'null'],
      },
      {
        name: 'umdcsc_ff_comment',
        type: ['string', 'null'],
      },
      {
        name: 'cl_h_b_deduct',
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
        name: 'cl_h_b_copay',
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
        name: 'cl_h_b_paid',
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
        name: 'cl_h_m_deduct',
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
        name: 'cl_h_m_copay',
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
        name: 'cl_h_m_paid',
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
        name: 'financial_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'contractual_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'hra_financial_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'hra_contractual_le_cd',
        type: ['string', 'null'],
      },
      {
        name: 'mdhs_adj_ndc_unit',
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
        name: 'ebpd',
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
        name: 'cl_h_case_id',
        type: ['string', 'null'],
      },
      {
        name: 'cl_d_dmi_benefit',
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
        name: 'cl_x_bas_coins',
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
        name: 'authmtch_cd',
        type: ['string', 'null'],
      },
      {
        name: 'mdhs_prcrtln_no',
        type: ['long', 'null'],
      },
      {
        name: 'mdhs_aplunit_cnt',
        type: ['long', 'null'],
      },
      {
        name: 'd10_ebtpalw',
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
        name: 'd10_alt_pay_percent',
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
        name: 'd10_alt_not_cvrd_amt_1',
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
        name: 'd10_alt_not_cvrd_rsn_cd_1',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_1',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_1',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_2',
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
        name: 'd10_alt_not_cvrd_rsn_cd_2',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_2',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_2',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_3',
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
        name: 'd10_alt_not_cvrd_rsn_cd_3',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_3',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_3',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_4',
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
        name: 'd10_alt_not_cvrd_rsn_cd_4',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_4',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_4',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_5',
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
        name: 'd10_alt_not_cvrd_rsn_cd_5',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_5',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_5',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_6',
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
        name: 'd10_alt_not_cvrd_rsn_cd_6',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_6',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_6',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_7',
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
        name: 'd10_alt_not_cvrd_rsn_cd_7',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_7',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_7',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_8',
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
        name: 'd10_alt_not_cvrd_rsn_cd_8',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_8',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_8',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_9',
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
        name: 'd10_alt_not_cvrd_rsn_cd_9',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_9',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_9',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_10',
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
        name: 'd10_alt_not_cvrd_rsn_cd_10',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_10',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_10',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_11',
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
        name: 'd10_alt_not_cvrd_rsn_cd_11',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_11',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_11',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_12',
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
        name: 'd10_alt_not_cvrd_rsn_cd_12',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_12',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_12',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_13',
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
        name: 'd10_alt_not_cvrd_rsn_cd_13',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_13',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_13',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_14',
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
        name: 'd10_alt_not_cvrd_rsn_cd_14',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_14',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_14',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_15',
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
        name: 'd10_alt_not_cvrd_rsn_cd_15',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_15',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_15',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_16',
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
        name: 'd10_alt_not_cvrd_rsn_cd_16',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_16',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_16',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_17',
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
        name: 'd10_alt_not_cvrd_rsn_cd_17',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_17',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_17',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_18',
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
        name: 'd10_alt_not_cvrd_rsn_cd_18',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_18',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_18',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_19',
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
        name: 'd10_alt_not_cvrd_rsn_cd_19',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_19',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_19',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_amt_20',
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
        name: 'd10_alt_not_cvrd_rsn_cd_20',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_rsn_typ_cd_20',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alt_not_cvrd_constnt_cd_20',
        type: ['string', 'null'],
      },
      {
        name: 'mdhs_day_sply_no',
        type: ['long', 'null'],
      },
      {
        name: 'd10_mdhs_apc_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_mdhs_apcstat_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_prvdr_id_rfrto_no',
        type: ['string', 'null'],
      },
      {
        name: 'd10_rf_jul_dt',
        type: ['string', 'null'],
      },
      {
        name: 'd10_mdhs_cvswrsn_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_cxt_rule_id',
        type: ['string', 'null'],
      },
      {
        name: 'd10_l_pay_percent_rule_id',
        type: ['string', 'null'],
      },
      {
        name: 'd10_pricing_cat_code',
        type: ['string', 'null'],
      },
      {
        name: 'cl_x_mdfr4_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_cldx_adj_ndc',
        type: ['string', 'null'],
      },
      {
        name: 'd10_filler',
        type: ['string', 'null'],
      },
      {
        name: 'd10_preventive_care_ind',
        type: ['string', 'null'],
      },
      {
        name: 'd10_alternate_tos_code',
        type: ['string', 'null'],
      },
      {
        name: 'd10_rtng_systm_pln_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_thrshold_typ_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_thrshold_amt',
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
        name: 'd10_postage_amt',
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
        name: 'd10_sales_tax',
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
        name: 'd10_service_tax',
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
        name: 'd10_facility_tax',
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
        name: 'd10_ic_case_ln_id',
        type: ['long', 'null'],
      },
      {
        name: 'd10_mdcr_adj_code',
        type: ['string', 'null'],
      },
      {
        name: 'd10_hcra_li_excl_cd',
        type: ['string', 'null'],
      },
      {
        name: 'd10_contrctd_rate_amt',
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
        name: 'd10_mdcr_price_vnd_amt',
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
    ],
  },
};

export { complex1, complex2, complex3, complex4 };
